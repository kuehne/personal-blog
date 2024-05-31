package xyz.kuehne.blog.entry;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service layer for {@link BlogEntry}.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class BlogEntryService {
    private final BlogEntryRepository blogEntryRepository;
    private final BlogEntryMapper blogEntryMapper;

    /**
     * Find all {@link BlogEntry} objects.
     *
     * @return A List of {@link BlogEntry} objects.
     */
    @Transactional(readOnly = true)
    public List<BlogEntry> findAll() {
        return blogEntryRepository.findAll();
    }

    /**
     * Find a specific {@link BlogEntry}.
     *
     * @param id The ID of the {@link BlogEntry}.
     * @return The {@link BlogEntry}.
     * @throws IllegalArgumentException The ID cannot be found.
     */
    @Transactional(readOnly = true)
    public BlogEntry findOne(@NonNull Long id) throws IllegalArgumentException {
        return blogEntryRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    /**
     * Create a new {@link BlogEntry} and insert into the database.
     *
     * @param blogEntryInputDto The input values for the {@link BlogEntry}.
     * @return The newly created {@link BlogEntry}.
     */
    public BlogEntry create(@NonNull BlogEntryInputDto blogEntryInputDto) {
        BlogEntry blogEntry = blogEntryMapper.inputToBlogEntry(blogEntryInputDto);
        return blogEntryRepository.save(blogEntry);
    }

    /**
     * Update the values of an existing {@link BlogEntry}.
     *
     * @param id                The ID of the {@link BlogEntry}.
     * @param blogEntryInputDto The input values for the {@link BlogEntry}.
     * @return The updated {@link BlogEntry}.
     * @throws IllegalArgumentException The ID cannot be found.
     */
    public BlogEntry update(long id, @NonNull BlogEntryInputDto blogEntryInputDto) throws IllegalArgumentException {
        BlogEntry blogEntry = blogEntryRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        blogEntryMapper.update(blogEntry, blogEntryInputDto);
        return blogEntryRepository.save(blogEntry);
    }

    /**
     * Delete an existing {@link BlogEntry}.
     *
     * @param id The ID of the {@link BlogEntry}.
     */
    public void delete(long id) {
        blogEntryRepository.deleteById(id);
    }
}
