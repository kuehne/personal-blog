package xyz.kuehne.blog.entry;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.springframework.web.util.HtmlUtils;
import xyz.kuehne.blog.utils.MarkdownUtils;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BlogEntryMapper {
    BlogEntryMapper INSTANCE = Mappers.getMapper(BlogEntryMapper.class);

    @Named("escapeHtml")
    static String escapeHtml(String content) {
        return HtmlUtils.htmlEscape(content);
    }

    @Named("convertToHtml")
    static String convertToHtml(String content) {
        return MarkdownUtils.convertMarkdownToHtml(content);
    }

    @Mapping(source = "content", target = "content", qualifiedByName = "escapeHtml")
    @Mapping(source = "teaser", target = "teaser", qualifiedByName = "escapeHtml")
    @Mapping(source = "content", target = "htmlContent", qualifiedByName = "convertToHtml")
    @Mapping(source = "content", target = "htmlTeaser", qualifiedByName = "convertToHtml")
    BlogEntry inputToBlogEntry(BlogEntryInputDto input);

    @Mapping(source = "content", target = "content", qualifiedByName = "escapeHtml")
    @Mapping(source = "teaser", target = "teaser", qualifiedByName = "escapeHtml")
    @Mapping(source = "content", target = "htmlContent", qualifiedByName = "convertToHtml")
    @Mapping(source = "teaser", target = "htmlTeaser", qualifiedByName = "convertToHtml")
    void update(@MappingTarget BlogEntry target, BlogEntryInputDto input);

    BlogEntryDto blogEntryToBlogEntryDto(BlogEntry blogEntry);

    List<BlogEntryDto> blogEntryListToBlogEntryDtoList(List<BlogEntry> blogEntries);
}
