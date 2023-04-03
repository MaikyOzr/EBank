/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bank.roma.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Maiky
 */


@RestController
@RequestMapping("/login")
public class LoginController {
    public String name;
    public String password;
    
    
    @GetMapping
    public LoginController login(){
        LoginController loginC = new LoginController();
        loginC.setName(name);
        loginC.setPassword(password);
        return loginC;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}
