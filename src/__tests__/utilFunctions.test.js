import { shortenText } from '../../src/utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('`shortenText` should not alter a string with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('`shortenText` should truncate long text (over 100) and add `...` at the end', () => {
    expect(shortenText(longText).length).not.toBe(longText.length);
    expect(shortenText(longText).slice(-3)).toBe('...');
})

test('`wordCount` should return the number of words in all posts', () => {
    expect(wordCount(posts)).toBe(233);
})

test('`attachUserName` should include displayName as a property of a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
}) 

test('`attachUserName` should not include posts without a matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPosts = posts[5];
    expect(newPosts).not.toContainEqual(deletedPosts);
})