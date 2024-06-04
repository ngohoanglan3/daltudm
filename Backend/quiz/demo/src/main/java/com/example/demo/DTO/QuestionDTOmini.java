package com.example.demo.DTO;

import java.util.Set;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class QuestionDTOmini {
    private Integer question_id;

    private String description;

    private Set<AnswernoObj> aSet;

}
