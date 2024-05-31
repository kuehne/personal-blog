package xyz.kuehne.blog.entry;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository Interface for {@link BlogEntry}
 */
public interface BlogEntryRepository extends JpaRepository<BlogEntry, Long> {
}
