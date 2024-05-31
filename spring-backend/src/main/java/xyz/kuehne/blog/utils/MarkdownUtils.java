package xyz.kuehne.blog.utils;

import org.commonmark.node.Node;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;
import org.springframework.web.util.HtmlUtils;

/**
 * Utils class for Markdown.
 */
public class MarkdownUtils {
    /**
     * Private constructor to prevent initialization.
     */
    private MarkdownUtils() {
    }

    /**
     * Convert a Markdown input to HTML.
     *
     * @param input The Markdown to be converted.
     * @return The generated HTML.
     */
    public static String convertMarkdownToHtml(String input) {
        Parser parser = Parser.builder().build();
        Node document = parser.parse(HtmlUtils.htmlEscape(input));
        HtmlRenderer renderer = HtmlRenderer.builder().build();
        return renderer.render(document);
    }
}
