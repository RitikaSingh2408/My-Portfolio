
// import required classes for the program
import java.util.Scanner;
import java.lang.Math;

public class GuessingGame {
  public static void main(String[] args) {
    // generate a random number between 1 and 100
    int answer = (int)(Math.random() * 100) + 1;
    // number of trials that the user has to guess the number
    int k = 5;
    // create a scanner object to read user input
    Scanner input = new Scanner(System.in);
    // TO check if the user has guessed the number
    boolean correct = false;
    System.out.println("I'm thinking of a number between 1 and 100.\nYou have 5 tries to guess the number.");
    while (k > 0) {
      System.out.println("Enter your guess: ");
     int guess = input.nextInt();
      // if the user guesses correctly, print the congratulation message and exit the program
      if (guess == answer) {
        System.out.println("You guessed the number!\nYou win!");
        break;
      }
      // if the user guesses greater than the number, print the message and reduce the number of
      // trials
      else if (guess > answer) {
        System.out.println("Your guess is too high.\nYou have " + (k - 1) + " tries left.");
        k--;
      }
      // if the user guesses less than the number, print the message and reduce the number of
      // trials
      else {
        System.out.println("Your guess is too low.\nYou have " + (k - 1) + " tries left.");
      }
      // after each trial decrease the number of trials by 1
      k--;
    }
    // if the user has run out of trials, print the message and exit the program

    if (correct == false) {
      System.out.println("You ran out of tries.\nYou lose!");
    }
  }
}
