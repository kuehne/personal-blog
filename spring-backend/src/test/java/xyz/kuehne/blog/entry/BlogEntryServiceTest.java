package xyz.kuehne.blog.entry;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

@SpringBootTest
class BlogEntryServiceTest {

    @Autowired
    private BlogEntryService blogEntryService;

    @MockBean
    private BlogEntryRepository blogEntryRepository;
    @MockBean
    private BlogEntryMapper blogEntryMapper;

    @Test
    @DisplayName("All entries should be returned")
    void findAll() {
        blogEntryService.findAll();

        Mockito.verify(blogEntryRepository, Mockito.times(1)).findAll();
    }

    @Test
    @DisplayName("The entry corresponding to the given id should be returned")
    void findOne() {
        Mockito.when(blogEntryRepository.findById(1L)).thenReturn(Optional.of(new BlogEntry()));
        blogEntryService.findOne(1L);

        Mockito.verify(blogEntryRepository, Mockito.times(1)).findById(1L);
    }

    @Test
    @DisplayName("An exception should be thrown if the id does not exist")
    void findOneException() {
        Mockito.when(blogEntryRepository.findById(-1L)).thenThrow(new IllegalArgumentException());

        Assertions.assertThatThrownBy(() -> blogEntryService.findOne(-1L)).isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    @DisplayName("An entry should be added and the htmlContent should be escaped")
    void create() {
        BlogEntryInputDto inputDto = new BlogEntryInputDto("title", "content<div></div>", "teaser");
        BlogEntry mappedBlogEntry = new BlogEntry();
        mappedBlogEntry.setTitle("title");
        mappedBlogEntry.setContent("content&lt;div&gt;&lt;/div&gt;");
        Mockito.when(blogEntryMapper.inputToBlogEntry(Mockito.any())).thenReturn(mappedBlogEntry);
        Mockito.when(blogEntryRepository.save(mappedBlogEntry)).thenReturn(mappedBlogEntry);
        BlogEntry savedBlogEntry = blogEntryService.create(inputDto);

        org.junit.jupiter.api.Assertions.assertAll(() -> {
            Assertions.assertThat(savedBlogEntry).isNotNull();
            Assertions.assertThat(savedBlogEntry.getTitle()).isEqualTo("title");
            Assertions.assertThat(savedBlogEntry.getContent()).isEqualTo("content&lt;div&gt;&lt;/div&gt;");
            Assertions.assertThat(savedBlogEntry.getHtmlContent()).isEqualTo("<p>content&lt;div&gt;&lt;/div&gt;</p>\n");
        });
    }

    @Test
    @DisplayName("An entry should be updated and the htmlContent should be escaped")
    void update() {
        BlogEntry blogEntry = new BlogEntry();
        blogEntry.setTitle("title");
        blogEntry.setContent("content");
        blogEntry.setId(1L);
        Mockito.when(blogEntryRepository.findById(1L)).thenReturn(Optional.of(blogEntry));
        BlogEntryInputDto inputDto = new BlogEntryInputDto("title", "content<div></div>", "teaser");
        Mockito.when(blogEntryRepository.save(blogEntry)).thenReturn(blogEntry);
        BlogEntry savedBlogEntry = blogEntryService.update(1L, inputDto);

        Mockito.verify(blogEntryMapper, Mockito.times(1)).update(blogEntry, inputDto);
        org.junit.jupiter.api.Assertions.assertAll(() -> {
            Assertions.assertThat(savedBlogEntry).isNotNull();
            Assertions.assertThat(savedBlogEntry.getTitle()).isEqualTo("title");
            Assertions.assertThat(savedBlogEntry.getHtmlContent()).isEqualTo("<p>content&lt;div&gt;&lt;/div&gt;</p>\n");
        });
    }

    @Test
    @DisplayName("An exception should be thrown, when the id for an updating entry cannot be found")
    void updateException() {
        Mockito.when(blogEntryRepository.findById(-1L)).thenThrow(new IllegalArgumentException());
        BlogEntryInputDto inputDto = new BlogEntryInputDto("title", "content<div></div>", "teaser");
        Assertions.assertThatThrownBy(() -> blogEntryService.update(1L, inputDto)).isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    @DisplayName("An entry should be deleted")
    void delete() {
        blogEntryService.delete(1L);

        Mockito.verify(blogEntryRepository, Mockito.times(1)).deleteById(1L);
    }
}