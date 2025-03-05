# Define variables

CC = gcc
CFLAGS = -wall -g
LDFLAGS = -lm

# Define targets
all: program

program: main.o utils.o
	$(CC) $(LDFLAGS) -c main.c
	
main.o: main.c utils.0
	$(CC) $(CFLAGS) -c main.c
	
utils.o: utils.c utils.h
	$(CC) $CFLAGS) -c utils.c
	
clean:
	rm -f *.o program