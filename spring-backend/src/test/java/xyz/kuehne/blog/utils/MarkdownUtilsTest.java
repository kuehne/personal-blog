package xyz.kuehne.blog.utils;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class MarkdownUtilsTest {

    @Test
    @DisplayName("Markdown should be converted to HTML")
    void markdownToHtml() {
        Assertions.assertThat(MarkdownUtils.convertMarkdownToHtml("# h1\n## h2\n_em_")).isEqualTo("<h1>h1</h1>\n<h2>h2</h2>\n<p><em>em</em></p>\n");

    }

    @Test
    @DisplayName("HTML Tags should be escaped")
    void convertMarkdownToHtmlEscaped() {
        Assertions.assertThat(MarkdownUtils.convertMarkdownToHtml("# h1\n<script></script>")).isEqualTo("<h1>h1</h1>\n<p>&lt;script&gt;&lt;/script&gt;</p>\n");
    }
}