package xyz.kuehne.blog.entry;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
class BlogEntryControllerTest {

    @Autowired
    private BlogEntryController blogEntryController;

    @MockBean
    private BlogEntryService blogEntryService;

    @MockBean
    private BlogEntryMapper blogEntryMapper;

    @Test
    @DisplayName("All entries should be returned and mapped to DTOs")
    void index() {
        blogEntryController.index();
        Mockito.verify(blogEntryService, Mockito.times(1)).findAll();
        Mockito.verify(blogEntryMapper, Mockito.times(1)).blogEntryListToBlogEntryDtoList(Mockito.any());
    }

    @Test
    @DisplayName("An entry should be added and mapped to a DTO")
    void add() {
        BlogEntryInputDto blogEntryInputDto = new BlogEntryInputDto("title", "content", "teaser");
        blogEntryController.add(blogEntryInputDto);
        Mockito.verify(blogEntryService, Mockito.times(1)).create(blogEntryInputDto);
        Mockito.verify(blogEntryMapper, Mockito.times(1)).blogEntryToBlogEntryDto(Mockito.any());
    }

    @Test
    @DisplayName("An entry should be updated and mapped to a DTO")
    void update() {
        BlogEntryInputDto blogEntryInputDto = new BlogEntryInputDto("title", "content", "teaser");
        blogEntryController.update(1L, blogEntryInputDto);
        Mockito.verify(blogEntryService, Mockito.times(1)).update(1L, blogEntryInputDto);
        Mockito.verify(blogEntryMapper, Mockito.times(1)).blogEntryToBlogEntryDto(Mockito.any());
    }

    @Test
    @DisplayName("An entry should be deleted")
    void delete() {
        blogEntryController.delete(1L);
        Mockito.verify(blogEntryService, Mockito.times(1)).delete(1L);
    }

    @Test
    @DisplayName("An entry should be returned and mapped to a DTO")
    void get() {
        BlogEntryInputDto blogEntryInputDto = new BlogEntryInputDto("title", "content", "teaser");
        blogEntryController.get(1L);
        Mockito.verify(blogEntryService, Mockito.times(1)).findOne(1L);
        Mockito.verify(blogEntryMapper, Mockito.times(1)).blogEntryToBlogEntryDto(Mockito.any());
    }
}