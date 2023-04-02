package com.bank.roma;

import org.springframework.stereotype.Component;

/**
 *
 * @author Maiky
 */
@Component
public class User { // створення користувача 

    protected String name;
    protected String pass;

    User(String name, String pass) {
        this.name = name;
        this.pass = pass;
    }

    User() {
    }
}
