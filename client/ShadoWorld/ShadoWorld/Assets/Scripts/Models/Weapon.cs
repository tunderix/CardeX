using UnityEngine;
using System.Collections;

public enum WeaponType
    {
        NotDecided,
	    Ranged,
	    Melee,
    };

public class Weapon {

	private int damage = 0;
    private int range = 0;
    private float reloadSpeed = 0.0f;
    private float attackSpeed = 0.0f;
    private WeaponType weaponType = WeaponType.NotDecided;
    private int ammo = 0;

    public Weapon(WeaponType weaponType, int damage, int range){
        this.damage = damage;
        this.weaponType = weaponType;
        this.range = range;
    }
}
