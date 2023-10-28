package org.example.service;

import org.example.dao.StudentEntity;
import org.example.dto.Student;


public interface StudentService {
    Iterable<StudentEntity> getStudent();

    void addStudent(Student student);
//
    Iterable<StudentEntity> getStudentByFirstName(String FirstName);

    boolean getEmailAndPassword(String email, String password);


    Iterable<StudentEntity> getStudentByName(String FirstName);

    void deleteStudent(Long id);
}

