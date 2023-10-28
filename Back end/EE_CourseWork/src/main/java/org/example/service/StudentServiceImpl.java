package org.example.service;


import org.example.dao.StudentEntity;
import org.example.dto.Student;
import org.example.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;


    @Override
    public Iterable<StudentEntity> getStudent() {
        return studentRepository.findAll();
    }


    @Override
    public void addStudent(Student student) {
        StudentEntity studentEntity = new StudentEntity();
        studentEntity.setFirstName(student.getFirstName());
        studentEntity.setLastName(student.getLastName());
        studentEntity.setPhoneNumber(student.getPhoneNumber());
        studentEntity.setEmail(student.getEmail());
        studentEntity.setPassword(student.getPassword());
        studentEntity.setCity(student.getCity());
        studentEntity.setAge(student.getAge());
        studentEntity.setGender(student.getGender());

        studentRepository.save(studentEntity);
    }

    @Override
    public Iterable<StudentEntity> getStudentByFirstName(String firstName) {
        return studentRepository.findByFirstName(firstName);
    }

    @Override
    public boolean getEmailAndPassword(String email, String password) {
        StudentEntity byEmailAndPassword = studentRepository.findStudentByEmailAndPassword(email, password);
        return byEmailAndPassword!=null ? true: false;
    }

    @Override
    public Iterable<StudentEntity> getStudentByName(String FirstName) {
        return studentRepository.findByFirstName(FirstName);
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
