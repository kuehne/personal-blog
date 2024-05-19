package xyz.kuehne.blog.entry;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import xyz.kuehne.blog.base.BaseController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/entries")
public class BlogEntryController extends BaseController {
    private final BlogEntryService blogEntryService;
    private final BlogEntryMapper blogEntryMapper;

    @GetMapping
    public List<BlogEntryDto> index() {
        return blogEntryMapper.blogEntryListToBlogEntryDtoList(blogEntryService.findAll());
    }

    @PostMapping
    public BlogEntryDto add(@RequestBody BlogEntryInputDto blogEntryInputDto) {
        return blogEntryMapper.blogEntryToBlogEntryDto(blogEntryService.create(blogEntryInputDto));
    }

    @PutMapping(path = "{id}")
    public BlogEntryDto update(@PathVariable long id, @RequestBody BlogEntryInputDto blogEntryInputDto) {
        return blogEntryMapper.blogEntryToBlogEntryDto(blogEntryService.update(id, blogEntryInputDto));
    }

    @DeleteMapping(path = "{id}")
    public void delete(@PathVariable long id) {
        blogEntryService.delete(id);
    }

    @GetMapping(path = "{id}")
    public BlogEntryDto get(@PathVariable long id) {
        return blogEntryMapper.blogEntryToBlogEntryDto(blogEntryService.findOne(id));
    }

}
