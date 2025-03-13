#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int sum(int a, int b)
{
    return a + b;
}

int sub(int a, int b)
{
    return a - b;
}




int fibonacci(int n)
{
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

int power(int a, int b)
{
    int result = 1;
    for (int i = 0; i < b; i++)
        result *= a;
    return result;
}

int factorial(int n)
{
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

int main()
{
    char str[100];
    printf("Enter a string: ");
    gets(str);
    printf("The reversed string is: %s", str);
    return 0;
}

