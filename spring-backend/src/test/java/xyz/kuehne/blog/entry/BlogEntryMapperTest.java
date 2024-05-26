package xyz.kuehne.blog.entry;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = {BlogEntryMapperImpl.class})
class BlogEntryMapperTest {
    @Autowired
    private BlogEntryMapper mapper;

    private static List<BlogEntry> getBlogEntries() {
        BlogEntry blogEntry = new BlogEntry();
        blogEntry.setId(1L);
        blogEntry.setTitle("title");
        blogEntry.setContent("content");
        blogEntry.setHtmlContent("htmlContent");
        blogEntry.setTeaser("teaser");
        blogEntry.setHtmlTeaser("htmlTeaser");
        BlogEntry blogEntry2 = new BlogEntry();
        blogEntry2.setId(2L);
        blogEntry2.setTitle("title2");
        blogEntry2.setContent("content2");
        blogEntry2.setHtmlContent("htmlContent2");
        blogEntry2.setTeaser("teaser2");
        blogEntry2.setHtmlTeaser("htmlTeaser2");
        return List.of(blogEntry, blogEntry2);
    }

    @Test
    @DisplayName("Content should be escaped during mapping")
    void inputToBlogEntry() {
        BlogEntryInputDto blogEntryInputDto = new BlogEntryInputDto("title", "content<script></script>", "teaser");
        BlogEntry mappedBlogEntry = mapper.inputToBlogEntry(blogEntryInputDto);
        org.junit.jupiter.api.Assertions.assertAll(() -> {
            Assertions.assertThat(mappedBlogEntry.getTitle()).isEqualTo("title");
            Assertions.assertThat(mappedBlogEntry.getContent()).isEqualTo("content&lt;script&gt;&lt;/script&gt;");
        });
    }

    @Test
    @DisplayName("A blog entry should be mapped to a DTO")
    void blogEntryToBlogEntryDto() {
        BlogEntry blogEntry = new BlogEntry();
        blogEntry.setId(1L);
        blogEntry.setTitle("title");
        blogEntry.setContent("content");
        blogEntry.setHtmlContent("htmlContent");
        BlogEntryDto blogEntryDto = mapper.blogEntryToBlogEntryDto(blogEntry);
        org.junit.jupiter.api.Assertions.assertAll(() -> {
            Assertions.assertThat(blogEntryDto).isNotNull();
            Assertions.assertThat(blogEntryDto.content()).isEqualTo("content");
            Assertions.assertThat(blogEntryDto.htmlContent()).isEqualTo("htmlContent");
            Assertions.assertThat(blogEntryDto.title()).isEqualTo("title");
            Assertions.assertThat(blogEntryDto.id()).isEqualTo(1L);
        });
    }

    @Test
    @DisplayName("A list of blog entries should be mapped to a list of DTOs")
    void blogEntryListToBlogEntryDtoList() {
        BlogEntryDto blogEntryDto = new BlogEntryDto(1L, "title", "content", "htmlContent", "teaser", "htmlTeaser");
        BlogEntryDto blogEntryDto2 = new BlogEntryDto(2L, "title2", "content2", "htmlContent2", "teaser2", "htmlTeaser2");
        List<BlogEntryDto> expectedList = List.of(blogEntryDto, blogEntryDto2);
        List<BlogEntry> blogEntries = getBlogEntries();
        List<BlogEntryDto> blogEntryDtos = mapper.blogEntryListToBlogEntryDtoList(blogEntries);
        Assertions.assertThat(blogEntryDtos).isEqualTo(expectedList);
    }

    @Test
    @DisplayName("An entity should be updated by the values from the input DTO")
    void updateBlogEntryDto() {
        BlogEntry blogEntry = new BlogEntry();
        blogEntry.setId(1L);
        blogEntry.setTitle("title");
        blogEntry.setContent("content");
        blogEntry.setHtmlContent("htmlContent");

        BlogEntryInputDto blogEntryInputDto = new BlogEntryInputDto("title2", "content<div></div>", "teaser");
        mapper.update(blogEntry, blogEntryInputDto);
        org.junit.jupiter.api.Assertions.assertAll(() -> {
            Assertions.assertThat(blogEntry.getId()).isEqualTo(1L);
            Assertions.assertThat(blogEntry.getTitle()).isEqualTo("title2");
            Assertions.assertThat(blogEntry.getContent()).isEqualTo("content&lt;div&gt;&lt;/div&gt;");
            Assertions.assertThat(blogEntry.getHtmlContent()).isEqualTo("<p>content&lt;div&gt;&lt;/div&gt;</p>\n");
        });
    }
}
