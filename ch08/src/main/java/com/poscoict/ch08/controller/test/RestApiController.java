package com.poscoict.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("restApiTestController")
public class RestApiController {
	
	@RequestMapping("/test/rest")
	public String test() {
		return "rest-test";
	}
}
