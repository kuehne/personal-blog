package xyz.kuehne.blog.entry;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import xyz.kuehne.blog.base.BaseController;

import java.util.List;

/**
 * The Controller for {@link BlogEntry}
 */
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/entries")
public class BlogEntryController extends BaseController {
    private final BlogEntryService blogEntryService;
    private final BlogEntryMapper blogEntryMapper;

    /**
     * Return all blog entries.
     *
     * @return All blog entries.
     */
    @GetMapping
    public List<BlogEntryDto> index() {
        return blogEntryMapper.blogEntryListToBlogEntryDtoList(blogEntryService.findAll());
    }

    /**
     * Add a new blog entry.
     *
     * @param blogEntryInputDto The input values for the new blog entry.
     * @return The newly created blog entry.
     */
    @PostMapping
    public BlogEntryDto add(@RequestBody BlogEntryInputDto blogEntryInputDto) {
        return blogEntryMapper.blogEntryToBlogEntryDto(blogEntryService.create(blogEntryInputDto));
    }

    /**
     * Update an existing blog entry.
     *
     * @param id                The ID of the blog entry.
     * @param blogEntryInputDto The new input values for the blog entry.
     * @return The updated blog entry.
     */
    @PutMapping(path = "{id}")
    public BlogEntryDto update(@PathVariable long id, @RequestBody BlogEntryInputDto blogEntryInputDto) {
        return blogEntryMapper.blogEntryToBlogEntryDto(blogEntryService.update(id, blogEntryInputDto));
    }

    /**
     * Delete a blog entry.
     *
     * @param id The ID of the blog entry.
     */
    @DeleteMapping(path = "{id}")
    public void delete(@PathVariable long id) {
        blogEntryService.delete(id);
    }

    /**
     * Return a single blog entry.
     *
     * @param id The ID of the blog entry.
     * @return The requested blog entry.
     */
    @GetMapping(path = "{id}")
    public BlogEntryDto get(@PathVariable long id) {
        return blogEntryMapper.blogEntryToBlogEntryDto(blogEntryService.findOne(id));
    }

}
