using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using Colyseus;

public class Player : MonoBehaviour {
	private Vector2 position = new Vector2();
	private int healthpoints = 0;
	private Client client = null;
	private Weapon activeWeapon = null;
	List<InventoryItem> inventory = new List<InventoryItem>();

	public Player(Client client, Vector2 startPosition){
		this.client = client;
		this.position = startPosition;

		//Last thing: Spawn player!
		this.spawn();
	}

	public void addItemToInventory(InventoryItem item){
		this.inventory.Add(item);
	}

	public void moveTo(Vector2 position){
		//In here, move player! 
		this.position = position;
	}

	public void spawn(){
		
	}

	public void takeDamage(int x){
		this.healthpoints -= x;

		//Update GUI
	}

	public Client getClient(){
		return client;
	}
}
