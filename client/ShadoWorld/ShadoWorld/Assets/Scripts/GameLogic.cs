using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using Colyseus;

public class GameLogic : MonoBehaviour {

	//Players
	public List<Player> players = new List<Player>();

	public GameLogic(){

	}

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void updatePlayerPositions(){

	}

	public void setPlayerPosition(Player player, Vector2 position){
		player.moveTo(position);
	}

	public void playerTookDamage(Player player, int amountOfDamage){
		
	}

	public Player findPlayerWithClient(Client client){
		for(int i = 0; i < this.players.Count - 1; i++){
			Player player = this.players[i];
			if (player.getClient().id == client.id){
				return player;
			}
		}
		return null;
    }
}
