package xyz.kuehne.blog.entry;

import java.io.Serializable;
import java.time.ZonedDateTime;

/**
 * DTO for {@link BlogEntry}
 */
public record BlogEntryDto(Long id, String title, String content,
                           String htmlContent, String teaser, String htmlTeaser,
                           ZonedDateTime createdAt) implements Serializable {
}
