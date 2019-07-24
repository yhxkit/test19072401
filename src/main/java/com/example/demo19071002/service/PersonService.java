package com.example.demo19071002.service;

import com.example.demo19071002.model.Person;

import java.util.List;

public interface PersonService {

    Iterable<Person> getPeople();
    Person getPerson(int idx);
}
