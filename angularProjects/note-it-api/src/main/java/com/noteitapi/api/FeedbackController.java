package com.noteitapi.api;


import com.noteitapi.api.view.FeedbackViewModel;
import com.noteitapi.mail.FeedbackSender;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.ValidationException;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin
public class FeedbackController {

    private FeedbackSender feedbackSender;

    public FeedbackController(FeedbackSender feedbackSender) {
        this.feedbackSender = feedbackSender;
    }

    @PostMapping
    public void sendFeedback(@RequestBody FeedbackViewModel feedbackViewModel,
                             BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            try {
                throw new ValidationException("Feedback has errors; Can not send feedback;");
            } catch (ValidationException e) {
                e.printStackTrace();
            }
        }

        this.feedbackSender.sendFeedback(
                feedbackViewModel.getEmail(),
                feedbackViewModel.getName(),
                feedbackViewModel.getFeedback());
    }
}
