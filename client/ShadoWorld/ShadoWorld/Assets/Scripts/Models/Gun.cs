using UnityEngine;
using System.Collections;

public class Gun : Weapon {
	
    private int ammo = 0;
	
	 private Gun(int ammo) : base(WeaponType.Ranged, 10, 100)
    {
		this.ammo = ammo;
    }
}
