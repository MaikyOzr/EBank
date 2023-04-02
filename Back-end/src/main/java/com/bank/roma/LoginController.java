package com.bank.roma;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


/**
 *
 * @author Maiky
 */
@RestController
@RequestMapping("/login")
public class LoginController {
  @PostMapping("/data")
  
  public ResponseEntity<String> processData(@RequestBody String data){
      return (ResponseEntity<String>) ResponseEntity.ok();
  }
   }
  
