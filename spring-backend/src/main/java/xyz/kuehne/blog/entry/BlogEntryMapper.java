package xyz.kuehne.blog.entry;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.springframework.web.util.HtmlUtils;
import xyz.kuehne.blog.utils.MarkdownUtils;

import java.util.List;

/**
 * Map DTOs from and to {@link BlogEntry}
 */
@Mapper(componentModel = "spring")
public interface BlogEntryMapper {
    BlogEntryMapper INSTANCE = Mappers.getMapper(BlogEntryMapper.class);

    /**
     * Escape HTML characters from the content.
     *
     * @param content The content.
     * @return The content with all HTML characters being escaped.
     */
    @Named("escapeHtml")
    static String escapeHtml(String content) {
        return HtmlUtils.htmlEscape(content);
    }

    /**
     * Convert the markdown content to HTML.
     *
     * @param content The content.
     * @return The generated HTML.
     */
    @Named("convertToHtml")
    static String convertToHtml(String content) {
        return MarkdownUtils.convertMarkdownToHtml(content);
    }

    /**
     * Map a {@link BlogEntryInputDto} to {@link BlogEntry}.
     *
     * @param input The input to be mapped.
     * @return A {@link BlogEntry} object.
     */
    @Mapping(source = "content", target = "content", qualifiedByName = "escapeHtml")
    @Mapping(source = "teaser", target = "teaser", qualifiedByName = "escapeHtml")
    @Mapping(source = "content", target = "htmlContent", qualifiedByName = "convertToHtml")
    @Mapping(source = "content", target = "htmlTeaser", qualifiedByName = "convertToHtml")
    BlogEntry inputToBlogEntry(BlogEntryInputDto input);

    /**
     * Map the values from the {@link BlogEntryInputDto} onto the {@link BlogEntry}.
     *
     * @param target The {@link BlogEntry}
     * @param input  The input values which will be mapped onto the target.
     */
    @Mapping(source = "content", target = "content", qualifiedByName = "escapeHtml")
    @Mapping(source = "teaser", target = "teaser", qualifiedByName = "escapeHtml")
    @Mapping(source = "content", target = "htmlContent", qualifiedByName = "convertToHtml")
    @Mapping(source = "teaser", target = "htmlTeaser", qualifiedByName = "convertToHtml")
    void update(@MappingTarget BlogEntry target, BlogEntryInputDto input);

    /**
     * Map a {@link BlogEntry} to {@link BlogEntryDto}
     *
     * @param blogEntry The {@link BlogEntry} to be mapped.
     * @return A {@link BlogEntryDto} object.
     */
    BlogEntryDto blogEntryToBlogEntryDto(BlogEntry blogEntry);

    /**
     * Map a list of {@link BlogEntry} objects to a list of {@link BlogEntryDto} objects.
     *
     * @param blogEntries The list of {@link BlogEntry} objects.
     * @return A list of {@link BlogEntryDto} objects.
     */
    List<BlogEntryDto> blogEntryListToBlogEntryDtoList(List<BlogEntry> blogEntries);
}
