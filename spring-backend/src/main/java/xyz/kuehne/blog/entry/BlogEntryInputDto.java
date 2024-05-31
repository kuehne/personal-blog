package xyz.kuehne.blog.entry;

import java.io.Serializable;

/**
 * InputDTO for {@link BlogEntry}
 */
public record BlogEntryInputDto(String title, String content, String teaser) implements Serializable {
}
