package xyz.kuehne.blog.entry;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogEntryRepository extends JpaRepository<BlogEntry, Long> {
}
