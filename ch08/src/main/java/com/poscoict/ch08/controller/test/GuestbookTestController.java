package com.poscoict.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test/gb")
public class GuestbookTestController {
	
	// add
	@RequestMapping("/ex01")
	public String ex01() {
		return "gb/ex01";
	}
}
