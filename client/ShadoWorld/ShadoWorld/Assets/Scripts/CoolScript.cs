using UnityEngine;
using System.Collections;
using Colyseus;

public class CoolScript : MonoBehaviour {
	Client colyseus;
	Room room;

	//room.OnUpdate += Room_OnUpdate;

	void Start() {
		Debug.Log ("onStart");
		colyseus = new Colyseus.Client ("ws://91.159.112.72:3001");
		room = colyseus.Join ("shadoworld");

	}

	void Room_OnUpdate (object sender, RoomUpdateEventArgs e)
	{
		if (e.patches == null) {
			// received first state
			// e.state <- do something with e.state
		} else {
			// received patched state
			// e.patches <- do something with e.patches
		}
	}
}
