/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.roma.roma;

import org.springframework.stereotype.Component;

/**
 *
 * @author Maiky
 */

@Component
public class User { // створення користувача 
    protected String name;
    protected String pass;
    
    User(String name, String pass){ 
        this.name=name;
        this.pass= pass;
    }
    User(){}
}
