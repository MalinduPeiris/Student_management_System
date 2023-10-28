package org.example.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Student {
    private Long id;

    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String password;
    private String city;
    private String age;
    private String gender;


}
