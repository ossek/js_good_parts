#include <stdio.h>
#include <stdlib.h>

int factorial(int);
int memoFactorial(int);
int fact(int,int[]);

//attempting c implementation of memoized factorial,
// sort of as described by Crockford for javascript
int main(int argct, char** fromInput)
{
	int from = atoi(fromInput[1]);
	printf("%d\n",memoFactorial(from));
}

int memoFactorial(int from)
{
	if(from == 0)
	{
		return 1;
	}

	//may need to null out this array first
	int memo[from + 1];
	for(int i = 0; i < from+1; i++)
	{
		memo[i] = -1;
	}
	memo[0] = 1;
	memo[1] = 1;
	return fact(from,memo);
}

int fact(int from,int memo[])
{
	if(!(memo[from] == -1))
	{
		return memo[from];
	}

	if(memo[from-1] == -1)
	{
	        memo[from -1] = fact(from - 1,memo);
	}
	return from * memo[from -1];
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

