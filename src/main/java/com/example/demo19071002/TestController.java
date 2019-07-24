package com.example.demo19071002;

import com.example.demo19071002.model.Person;
import com.example.demo19071002.service.PersonService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class TestController {

    private PersonService personService;
    public TestController(PersonService personService){
        this.personService = personService;
    }

    @GetMapping({"","/"})
    public String mainpage(Model model) {
        model.addAttribute("people", personService.getPeople());
        return "main";
    }


    @GetMapping("/{name}")
    public String page(@PathVariable String name, Model model) {
        model.addAttribute("pageName", name);
        return "test";
    }

    @GetMapping("/api/{idx}")
    @ResponseBody
    public Person page(@PathVariable int idx, Model model) {
        return personService.getPerson(idx);
    }


    @PostMapping("/api/getPeople")
    @ResponseBody
    public Iterable<Person> getPeople(){
        return personService.getPeople();
    }

}
