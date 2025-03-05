public class Dog {

	private String name;
	private String breed;
	private int age;
		
	//Constructor
	public Dog(String name, String breed, int age) {
		this.name = name;
		this.breed = breed:
		this.age = age;
	}
	
	//Getters and setters
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getBreed() {
		return breed;
	}
	
	public void setBreed(String breed) {
		this.breed = breed;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	//Method to bark
	public void bark() {
		System.out.println("Woof!");
	}
	
	//Main method
	public static void main(Stringargs) {
		// Create a Dog object
		Dog myDog = new Dog("Buddy", "Golden Retriever", 3);
		
		System.out.println("Dog's name: " myDog.getName());
		System.out.println("Dog's breed: " + myDog.getBreed());
		System.out.println("Dog's age: " + myDog.getAge());
		
		
		myDog.bark();
	}
}