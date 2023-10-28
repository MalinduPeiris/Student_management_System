package org.example.controller;

import lombok.Builder;
import lombok.extern.slf4j.Slf4j;
import org.example.dao.StudentEntity;
import org.example.dto.Student;
import org.example.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@Slf4j
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService service;
    @GetMapping
    public Iterable<StudentEntity> getStudent() {
        return service.getStudent();
    }
    @PostMapping
    public void addStudent(@RequestBody Student student) {
        service.addStudent(student);
    }


    @GetMapping("/{firstName}")
    public Iterable<StudentEntity> getStudentByFirstName(@PathVariable String firstName) {
        return service.getStudentByFirstName(firstName);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        service.deleteStudent(id);
    }



    @GetMapping("/{email}/{password}")
    public boolean getEmailAndPassword(@PathVariable String email, @PathVariable String password){
        boolean emailAndPassword = service.getEmailAndPassword(email, password);
        return emailAndPassword;
    }
}
