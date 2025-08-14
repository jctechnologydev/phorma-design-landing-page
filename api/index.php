<?php
header('Content-Type: application/json');
require __DIR__ . '/vendor/autoload.php'; // After running: composer require phpmailer/phpmailer vlucas/phpdotenv


// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

// Verify vendor autoload path
$autoloadPath = __DIR__ . '/vendor/autoload.php';
if (!file_exists($autoloadPath)) {
    die(json_encode(['error' => 'Composer dependencies not installed. Missing vendor/autoload.php']));
}

require $autoloadPath;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Verify .env file location
$envPath = __DIR__;
if (!file_exists($envPath . '/.env')) {
    die(json_encode(['error' => 'Missing .env file in root directory']));
}

try {
    // Initialize Dotenv - use createUnsafeImmutable if you're having permission issues
    $dotenv = Dotenv::createImmutable($envPath);
    $dotenv->load();
} catch (Exception $e) {
    die(json_encode(['error' => 'Dotenv initialization failed: ' . $e->getMessage()]));
}

// Rest of your existing code...

// Load environment variables from .env
//$dotenv = Dotenv::createImmutable(__DIR__);

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
//$dotenv->load();
$dotenv->safeLoad();

// Simple rate limiting using PHP sessions
session_start();
$windowMs = 10 * 60; // 10 minutes in seconds
$maxRequests = 10;

if (!isset($_SESSION['requests'])) {
    $_SESSION['requests'] = [];
}
$_SESSION['requests'] = array_filter($_SESSION['requests'], function ($t) use ($windowMs) {
    return ($t > time() - $windowMs);
});
if (count($_SESSION['requests']) >= $maxRequests) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests']);
    exit;
}
$_SESSION['requests'][] = time();

// Validate payload
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if (strlen($name) < 3) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Nome inválido']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Email inválido']);
    exit;
}
if (strlen($message) < 2) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Mensagem muito curta']);
    exit;
}

// Sanitize message
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Send email to site owner
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USER'];
    $mail->Password = $_ENV['SMTP_PASS'];
    $mail->SMTPSecure = ($_ENV['SMTP_SECURE'] === 'true') ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $_ENV['SMTP_PORT'] ?? 587;

    $mail->setFrom($_ENV['SMTP_FROM'], 'Site Contact');
    $mail->addAddress($_ENV['OWNER_EMAIL']);
    $mail->Subject = "Contato de $name";
    $mail->Body = "Nome: $name\nEmail: $email\n\nMensagem:\n$safeMessage";
    $mail->send();

    // Confirmation email to sender
    $mail2 = new PHPMailer(true);
    $mail2->isSMTP();
    $mail2->Host = $_ENV['SMTP_HOST'];
    $mail2->SMTPAuth = true;
    $mail2->Username = $_ENV['SMTP_USER'];
    $mail2->Password = $_ENV['SMTP_PASS'];
    $mail2->SMTPSecure = ($_ENV['SMTP_SECURE'] === 'true') ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail2->Port = $_ENV['SMTP_PORT'] ?? 587;

    $mail2->setFrom($_ENV['SMTP_FROM'], $_ENV['SITE_NAME']);
    $mail2->addAddress($email);
    $mail2->Subject = "Recebemos sua mensagem";
    $mail2->Body = "Olá $name,\n\nRecebemos sua mensagem e responderemos em breve.\n\n— Equipa";
    $mail2->send();

    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Erro interno: ' . $e->getMessage()]);
}
