# Maria Komardina

## Contacts

* ***Phone:*** +7 (920) 835-78-35
* ***E-mail:*** fox_kom@internet.ru
* ***GitHub:*** https://github.com/fox1206
* ***Location:*** Bryansk, Russia

## About me

* ***Work experients:***

|  #  |      Work period      |                   Company                   |                    Post                    |
|-----|-----------------------|---------------------------------------------|--------------------------------------------|
|  1  | Dec 2019 - Jul 2020   | ROSGOSSTRAKH BANK                           | Sales manager                              |
|  2  | Jun 2019 - Dec 2019   | Sberbank of Russia                          | Sales manager                              |
|  3  | Mar 2017 - May 2017   | Pension Fund of the RF                      | Specialist                                 |
|  4  | Apr 2014 - Mar 2017   | Municipal administration city of Kurilsk    | Specialist of the Economics Department     |
|  5  | Nov 2011 - Apr 2014   | Sberbank of Russia                          | Sales manager                              |

* ***Personal qualities:***

Good at establishind rapport with people from diverse backgrounds.

I have excellent written and werbal communication skills. 

I cope with a large amount of information, and I can work in a team. 

I decided to study in order to gain new knowledge and start working at IT.

## Skills

* HTML
* CSS
* Java
* Sprinf Framework
* Hibernate
* Thymeleaf
* MySQL

## Code example


    ```javascript
    function task6(n) {
        let newText = "";
        while(n > 0){
            text = prompt("Ввод строки: ");
            newText += text;  
            newText += " "; 
            //console.log(newText);      
            n--;
        }
        return newText;
    }
    ```


    ```java
    @GetMapping("/allAgeGroup/{id}/editGroup")
    public String studentEdit(@PathVariable(value = "id") long id, Model model){
        
        if (!ageGroupRepository.existsById(id)){
            return "redirect:/allAgeGroup";
        }

        Optional<AgeGroup> groupOptional = ageGroupRepository.findById(id);

        ArrayList<AgeGroup> result = new ArrayList<>();
        groupOptional.ifPresent(result::add);
        model.addAttribute("groupOptional", result);
        LOGGER.info("Переход на страницу редактирования группы!");
        
        return "edit/group-edit";
    }
    ```

## Experience

[Example work](https://tutorappkurilsk.herokuapp.com/)

## Education

* ***University:*** Far Eastern Federal University. Applied computer science in economics
* ***Courses:*** Academy Step. Java programming Language

## English

***A1*** (in the process - A2)