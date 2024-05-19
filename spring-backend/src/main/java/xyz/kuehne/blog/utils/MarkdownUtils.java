package xyz.kuehne.blog.utils;

import org.commonmark.node.Node;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;
import org.springframework.web.util.HtmlUtils;

public class MarkdownUtils {
    private MarkdownUtils() {
    }

    public static String convertMarkdownToHtml(String input) {
        Parser parser = Parser.builder().build();
        Node document = parser.parse(HtmlUtils.htmlEscape(input));
        HtmlRenderer renderer = HtmlRenderer.builder().build();
        return renderer.render(document);
    }
}
