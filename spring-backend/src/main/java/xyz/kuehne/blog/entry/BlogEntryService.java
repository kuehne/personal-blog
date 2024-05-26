package xyz.kuehne.blog.entry;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class BlogEntryService {
    private final BlogEntryRepository blogEntryRepository;
    private final BlogEntryMapper blogEntryMapper;

    @Transactional(readOnly = true)
    public List<BlogEntry> findAll() {
        return blogEntryRepository.findAll();
    }

    @Transactional(readOnly = true)
    public BlogEntry findOne(@NonNull Long id) {
        return blogEntryRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public BlogEntry create(@NonNull BlogEntryInputDto blogEntryInputDto) {
        BlogEntry blogEntry = blogEntryMapper.inputToBlogEntry(blogEntryInputDto);
        return blogEntryRepository.save(blogEntry);
    }

    public BlogEntry update(long id, @NonNull BlogEntryInputDto blogEntryInputDto) throws IllegalArgumentException {
        BlogEntry blogEntry = blogEntryRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        blogEntryMapper.update(blogEntry, blogEntryInputDto);
        return blogEntryRepository.save(blogEntry);
    }

    public void delete(long id) {
        blogEntryRepository.deleteById(id);
    }
}
