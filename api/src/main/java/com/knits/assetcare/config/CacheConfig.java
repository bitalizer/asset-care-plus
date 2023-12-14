package com.knits.assetcare.config;

import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.RemovalCause;
import com.github.benmanes.caffeine.cache.Scheduler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;


@Slf4j
@EnableCaching
@Configuration
public class CacheConfig {

    @Value("${cache.caffeine.initial-capacity:100}")
    private int initialCapacity;

    @Value("${cache.caffeine.maximum-size:500}")
    private int maximumSize;

    @Value("${cache.caffeine.expire-after-write-seconds:300}")
    private int expireAfterWriteSeconds;

    @Bean
    public Caffeine<Object, Object> caffeineConfig() {
        return Caffeine.newBuilder()
                .initialCapacity(initialCapacity)
                .maximumSize(maximumSize)
                .expireAfterWrite(expireAfterWriteSeconds, TimeUnit.SECONDS)
                .evictionListener((Object key, Object value,
                                   RemovalCause cause) -> log.debug(
                        String.format("Key %s was evicted (%s)%n", key, cause)))
                .removalListener((Object key, Object value,
                                  RemovalCause cause) -> log.debug(
                        String.format("Key %s was removed (%s)%n", key, cause)))
                .scheduler(Scheduler.systemScheduler());
    }

    @Bean
    public CacheManager cacheManager(Caffeine caffeine) {
        CaffeineCacheManager caffeineCacheManager = new CaffeineCacheManager();
        caffeineCacheManager.setCaffeine(caffeine);
        return caffeineCacheManager;
    }


}