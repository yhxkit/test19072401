package com.example.demo19071002.repository;

import com.example.demo19071002.model.Person;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PersonRepository extends PagingAndSortingRepository<Person, Integer> {
}
