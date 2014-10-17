#include <stdio.h>
#include <stdlib.h>

int factorial(int);

int main(int argct, char** fromInput)
{
	int from = atoi(fromInput[1]);
	printf("%d\n",factorial(from));
}

int factorial(int from)
{
	if(from < 0)
	{
		return 0;
	}
	if(from <= 1)
	{
		return 1;
	}
	int result = from * factorial(from - 1);
	return result;
}

