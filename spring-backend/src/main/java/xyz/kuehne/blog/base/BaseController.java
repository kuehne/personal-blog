package xyz.kuehne.blog.base;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

/**
 * Base Controller for Entries.
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200") // TODO: Fix for production
public class BaseController {
}

