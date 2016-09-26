using UnityEngine;
using System.Collections;

public class InventoryItem {
	private Weapon weapon = null;
    private Texture2D image = null;
    private bool droppable = true;
	public InventoryItem(){
        
    }

    public void setDroppable(bool drop){
        this.droppable = drop;
    }
    public void setImage(Texture2D image){
        this.image = image;
    }

    public void setWeapon(Weapon weapon){
        this.weapon = weapon;
    }

    public bool isWeapon(){
        if (this.weapon != null){
            return true;
        }else{
            return false;
        }
    }

    public Weapon getWeapon(){
        return this.weapon;
    }
}
