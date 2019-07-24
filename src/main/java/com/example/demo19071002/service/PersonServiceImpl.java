package com.example.demo19071002.service;

import com.example.demo19071002.model.Person;
import com.example.demo19071002.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonServiceImpl implements PersonService {

    PersonRepository personRepository;
    public PersonServiceImpl(PersonRepository personRepository){
        this.personRepository = personRepository;
    }

    @Override
    public Iterable<Person> getPeople() {
        return personRepository.findAll();
    }

    @Override
    public Person getPerson(int idx) {
        Optional<Person> op = personRepository.findById(idx);
        if(op.isPresent()){
            return op.get();
        }else{
            throw new RuntimeException("그런 사람없음;");
        }

    }
}


