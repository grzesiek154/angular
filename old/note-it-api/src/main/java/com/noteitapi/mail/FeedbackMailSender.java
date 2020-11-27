package com.noteitapi.mail;

import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Component;

@Component
public class FeedbackMailSender  implements FeedbackSender{

    private JavaMailSenderImpl javaMailSender;

    public FeedbackMailSender(Environment environment) {
        javaMailSender = new JavaMailSenderImpl();

        javaMailSender.setHost(environment.getProperty("spring.mail.host"));
        javaMailSender.setPort(Integer.parseInt(environment.getProperty("spring.mail.port")));
        javaMailSender.setUsername(environment.getProperty("spring.mail.username"));
        javaMailSender.setPassword(environment.getProperty("spring.mail.password"));

    }

    @Override
    public void sendFeedback(String from, String name, String feedback) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("gmalarski91@gmail.com");
        message.setSubject("New feedback from " + name);
        message.setText(feedback);
        message.setFrom(from);

    }
}
