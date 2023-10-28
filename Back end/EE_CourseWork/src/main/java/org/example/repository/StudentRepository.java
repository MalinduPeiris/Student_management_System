package org.example.repository;

import org.example.dao.StudentEntity;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<StudentEntity,Long> {

    Iterable<StudentEntity> findByFirstName(String firstName);


    StudentEntity findStudentByEmailAndPassword(String email, String password);

}
