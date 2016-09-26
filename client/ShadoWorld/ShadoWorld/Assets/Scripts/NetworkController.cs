using UnityEngine;
using System.Collections;
using Colyseus;

public class NetworkController : MonoBehaviour {
	Client colyseus;
	Room room;

	GameLogic logic = new GameLogic();
	//room.OnUpdate += Room_OnUpdate;

	void Start() {
		Debug.Log ("onStart");
		colyseus = new Colyseus.Client ("ws://91.159.112.72:3001");
		room = colyseus.Join ("shadoworld");
	}

	void Room_OnUpdate (object sender, RoomUpdateEventArgs e)
	{
		
		if (e.patches == null) {
			//Create new player from server information
			Player player = new Player(colyseus, new Vector2(10,10)); //TODO, Random start positions
		} else {
			
			//In here, capture movement for player and delegate to GameController. 
			//Set new positions for players!
			switch ("serverMessage")
			{
	   			case "updatePlayers":
				   	this.logic.updatePlayerPositions();
					break;
	    		case "playerHit":
					this.logic.findPlayerWithClient(colyseus).takeDamage(10);
					break;
	    		case "spawnPlayer":
					//Initialize other players! 
					Player player = new Player(colyseus, new Vector2(10,10));
					this.logic.players.Add(player);
					break;
	    		default:
					Debug.Log("Wrong Server Message?!!?!?");
					break;
			}
		}

		
	}
}