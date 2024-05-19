package xyz.kuehne.blog;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import xyz.kuehne.blog.entry.BlogEntryController;

@SpringBootTest
class BlogApplicationTests {

    @Autowired
    private BlogEntryController blogEntryController;

    @Test
    @DisplayName("Controllers should be loaded")
    void contextLoads() {
        Assertions.assertThat(blogEntryController).isNotNull();
    }

}
